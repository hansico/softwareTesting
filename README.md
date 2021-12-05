# Software Testing course assignment
[![Coverage Status](https://coveralls.io/repos/github/hansico/softwareTesting/badge.svg?branch=main)](https://coveralls.io/github/hansico/softwareTesting?branch=main)

## Purpose of this repository

This repository is a project assignment done for Software Testing course at Tampere University. Library to be tested was provided in the template https://github.com/otula/COMP.SE.200-2021-2022-1. 
Jest was selected as a testing framework.

## Using
Git and npm are required for the following instructions to work.

Clone and install required packages
```
git clone https://github.com/hansico/softwareTesting.git
cd softwareTesting/
npm install
```
Packages that are installed (with their own possible dependencies): [Jest](https://github.com/facebook/jest), [babel-jest](https://github.com/facebook/jest), [coveralls](https://github.com/nickmerwin/node-coveralls), [jest-html-reporter](https://github.com/Hargne/jest-html-reporter).

After installation run tests
```
npm run test
```
Results are shown in the terminal and two reports are generated: test-report.html and ./coverage/lcov-report/index.html. First one showing pass status of each test case and the latter showing test coverage.

=====

Source code folder contains a separate license file that must **NOT** be removed under any circumstances!
Removing this license file directly violates terms and conditions of the software under testing.
Individuals who remove or modify the license file will also carry the consequences.
