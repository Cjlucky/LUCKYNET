# Clean install helper for Windows (fix EPERM locks, align to Node 20)
# Usage:
# 1) Run PowerShell as Administrator
# 2) Optionally pause OneDrive sync
# 3) From project root, run:
#    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
#    .\cleanup-install.ps1

Write-Host "== Stopping potential lockers (node, vite, esbuild, OneDrive) ==" -ForegroundColor Cyan
$processNames = @("node", "vite", "esbuild", "onedrive")
foreach ($p in $processNames) {
  try { Get-Process -Name $p -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue } catch {}
}

foreach ($p in @("node.exe", "OneDrive.exe")) {
  try { Start-Process -FilePath "taskkill.exe" -ArgumentList "/F /IM $p" -NoNewWindow -ErrorAction SilentlyContinue | Out-Null } catch {}
}

Write-Host "== Removing lock-prone @esbuild folder (if exists) ==" -ForegroundColor Cyan
try {
  if (Test-Path ".\node_modules\@esbuild\") {
    Remove-Item -Recurse -Force ".\node_modules\@esbuild\"
  }
} catch {
  Write-Warning "Couldn't remove @esbuild on first try. Retrying once after 2s..."
  Start-Sleep -Seconds 2
  try { Remove-Item -Recurse -Force ".\node_modules\@esbuild\" } catch { Write-Warning "Still locked; continuing." }
}

Write-Host "== Removing node_modules and package-lock.json ==" -ForegroundColor Cyan
try {
  if (Test-Path ".\node_modules\") { Remove-Item -Recurse -Force ".\node_modules\" }
  if (Test-Path ".\package-lock.json") { Remove-Item -Force ".\package-lock.json" }
} catch {
  Write-Warning "Removal hit a lock. Close editors, pause OneDrive, run as Admin, then re-run this script."
  exit 1
}

# Switch to Node 20 with nvm-windows if available
$hasNvm = Get-Command nvm -ErrorAction SilentlyContinue
if ($hasNvm) {
  Write-Host "== Ensuring Node 20 is active via nvm ==" -ForegroundColor Cyan
  try { nvm install 20 | Out-Null } catch {}
  nvm use 20
  Write-Host ("Node version now: {0}" -f (node -v))
} else {
  Write-Warning "nvm-windows not found. Recommended: https://github.com/coreybutler/nvm-windows"
  Write-Warning ("Proceeding with current Node: {0}" -f (node -v))
}

Write-Host "== Clean install (npm ci) ==" -ForegroundColor Cyan
$ci = Start-Process -FilePath "npm" -ArgumentList "ci" -NoNewWindow -PassThru -Wait
if ($ci.ExitCode -ne 0) {
  Write-Warning "npm ci failed, retrying once after 2s..."
  Start-Sleep -Seconds 2
  $ci2 = Start-Process -FilePath "npm" -ArgumentList "ci" -NoNewWindow -PassThru -Wait
  if ($ci2.ExitCode -ne 0) {
    Write-Error "npm ci failed again. Ensure OneDrive is paused and editors are closed, then re-run."
    exit 1
  }
}

Write-Host "== Done. You can now run 'npm run dev' or 'npm run build'. ==" -ForegroundColor Green
