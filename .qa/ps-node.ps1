Get-CimInstance Win32_Process -Filter "Name='node.exe'" | ForEach-Object {
  $c = ($_.CommandLine -replace '\s+', ' ')
  if ($c.Length -gt 140) { $c = $c.Substring(0, 140) }
  "{0} :: {1}" -f $_.ProcessId, $c
}
