# bigIntegerJS

Simple proof of concept for working with Big Integers in JavaScript, with TDD

## Motivation

I was working a challenge using "big" integers (i.e., something greater than 64-bit) and wanted to see how to implement this.

This is only a proof-of-concept; it is:
* Incomplete. 
* Non-performant. 
* Unstructured.  

A real implementation would:
* Provide a full suite of methods; eg., add(), subtract(), divide(), mod(), ... 
* Use native operations until things overflow.
* Use current object-oriented practices, with a constructor, instance methods, etc...

## TDD

The code was completely driven out with the tests that you see. As usual, this was a life-saver for those times when I "fixed" the latest problem, only to find that it broke one or more previous examples.
