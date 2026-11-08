Get-NetTCPConnection -State Listen -ErrorAction SilentlyContinue |
  Where-Object { $_.LocalPort -ge 3000 -and $_.LocalPort -le 3010 } |
  ForEach-Object { "{0} : {1} pid={2}" -f $_.LocalAddress, $_.LocalPort, $_.OwningProcess }
