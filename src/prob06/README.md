# 動態網頁設計 (2022 Spring) 期末測驗

### [問題 6]：這是第十三、十四週作業 - 把『函數』傳遞給另一函數當作『參數』，用來過濾陣列中的資料。

- 未經修改的作業問題，主要是考各位平時有沒有用心做作業，以下是作業的原始說明。
- 請依照題目說明，在『指定段落』完成欠缺的程式碼。
- 把『函數』用作參數在 JavaScript 是非常常見的應用技巧。
- 請參考 `apply(...)` 與 `gt10(...)` 的使用方式，另外撰寫兩個過濾函數：
    - `even(v)` 如果 `v` 是偶數則回傳『真』。
    - `odd(v)` 如果 `v` 是奇數則回傳『真』。

### 簡易測試
```Powershell
prob06> 1..100 | Get-Random -Count 20 | node .\main.js
gt10(v) => 33,77,15,66,83,30,37,47,64,55,22,68,18,61,100,60,57
even(v) => 6,66,30,8,64,22,68,18,100,4,60
odd(v)  => 33,77,15,83,37,47,55,61,57

prob06> 1..100 | Get-Random -Count 20 | node .\main.js
gt10(v) => 43,62,94,46,55,19,52,30,38,92,84,13,39,86,21,24,17,61,22
even(v) => 62,94,46,52,30,38,92,84,86,24,22
odd(v)  => 43,55,5,19,13,39,21,17,61

prob06> 1..100 | Get-Random -Count 20 | node .\main.js
gt10(v) => 85,84,89,32,97,26,65,28,87,90,29,47,44,76,14,78,72,98,12
even(v) => 84,32,26,28,90,44,2,76,14,78,72,98,12
odd(v)  => 85,89,97,65,87,29,47
```

### 自動批閱測試
```Powershell
prob06> .\test.ps1

********************************************
*         Dynamic Web Programming          *
*  Exercises / Homework Automatic Grading  *
********************************************

Test Data : 23 6 6 24 12 8 17 26 12 22 16 10 14 1 11 7 9 7 29 21 6 7 14 16 25 4 5 2
Test Data : 10 7 9 24 22 12 29 6 18 13 30 23 7 23 7 13 14 8 29 17 9 7 19 9 28 25 16 21 2 8
Test Data : 16 26 27 14 16 1 12 22 14 2 9 21 29 28 3 19 9 9 18 26 21 1 22
Test Data : 4 10 16 27 28 2 2 2 14 27 16 9 21 18 22 23 14 2 11 16 8 2 12 14 13 15 3
Test Data : 19 26 18 25 17 23 16 1 10 23 25 7 22 25 18 28 13 27 24 14 23 13 4
Test Data : 30 4 15 28 3 18 25 18 19 26 16 25 16 19 17 7 18 1 3 24 28 15 15 29 9 12
Test Data : 30 8 8 27 5 15 7 29 29 17 19
Test Data : 3 12 7 25 28 16 23 14 12 21 16 2 7 26 28
Test Data : 14 16 28 9 22 27 8 28 30 22 18 19 24 21 29
Test Data : 5 14 21 29 4 1 20 13 23 27 27 4

測試通過!

gt10(v) => 14,21,29,20,13,23,27,27
even(v) => 14,4,20,4
odd(v)  => 5,21,29,1,13,23,27,27
```
