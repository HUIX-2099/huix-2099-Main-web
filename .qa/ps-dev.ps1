Get-CimInstance Win32_Process |
  Where-Object { $_.Name -in 'cmd.exe', 'node.exe' -and $_.CommandLine -match 'next|npm run' } |
  ForEach-Object {
    $c = ($_.CommandLine -replace '\s+', ' ')
    if ($c.Length -gt 120) { $c = $c.Substring(0, 120) }
    "pid={0} ppid={1} :: {2}" -f $_.ProcessId, $_.ParentProcessId, $c
  }
