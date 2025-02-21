# Uncommon JavaScript Bug: Null and Undefined Handling
This repository demonstrates a common yet easily overlooked bug in JavaScript functions that involves improper handling of null and undefined values. The `foo` function attempts to add two numbers but fails when passed an undefined value, throwing a TypeError.

The bug is subtle because it works correctly for null values but fails for undefined.  This highlights the difference in how JavaScript treats null and undefined.

The solution shows how to correctly handle both null and undefined using the loose equality operator (==) or explicit checks.