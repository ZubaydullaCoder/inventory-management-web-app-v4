Runtime ReferenceError
Server

getComputedStyle is not defined

src\app\page.tsx (47:19) @ Home

45 | <span style={{ color: "var(--primary)" }}>
46 | {getComputedStyle(document.documentElement).getPropertyValue(

> 47 | "--primary"

     |                   ^

48 | ) || "var(--primary)"}
49 | </span>
50 | </span>
Call Stack
8

Show 7 ignore-listed frame(s)
Home
src\app\page.tsx (47:19)
