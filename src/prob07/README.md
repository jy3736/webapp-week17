# 動態網頁設計 (2022 Spring) 期末測驗

### [問題 7]：這是第十三、十四週作業 - JavaScript 陣列(Array)也有自己的過濾函數。

- 未經修改的作業問題，主要是考各位平時有沒有用心做作業，以下是作業的原始說明。
- 請依照題目說明，在『指定段落』完成欠缺的程式碼。
- 請參考 `get_gt10(...)` 與 `get_has3(...)` 的設計方式，另外撰寫『質數』過濾函數。
    - `get_gt10(...)` 使用的是箭頭(=>)函數(arrow function)定義方式。
    - `get_has3(...)` 當要定義的處理方式較複雜，則會採用外部函數的定義方式。

### 簡易測試
```Powershell
prob07> 1..100 | Get-Random -Count 20 | node .\main.js
get_gt10(data) => 53,49,46,91,76,77,18,55,89,35,93,71,51,26,83,94,44,100
get_has3(data) => 3,53,35,93,83
get_prime(data) => 3,53,89,71,5,83

prob07> 1..100 | Get-Random -Count 10 | node .\main.js
get_gt10(data) => 67,66,82,94,76,80,61,68
get_has3(data) => 
get_prime(data) => 67,61,2

prob07> 1..100 | Get-Random -Count 15 | node .\main.js
get_gt10(data) => 94,73,21,89,14,16,11,53,19,70,17,66,27
get_has3(data) => 73,53
get_prime(data) => 73,89,11,53,19,5,17,7
```

### 自動批閱測試
```Powershell
prob07> .\test.ps1

********************************************
*         Dynamic Web Programming          *
*  Exercises / Homework Automatic Grading  *
********************************************

Test Data : 10 28 23 12 15 27 1 21 8 28 10 16 2 12 20 27 27 22 17 13 8 17 4 4 7 21 27 29 9
Test Data : 4 22 2 8 24 23 4 29 7 27 14 9 12
Test Data : 27 18 4 15 2 7 28 5 3 12 4 15 27 20 29 24 26 5 25 9 14
Test Data : 15 7 16 26 10 6 14 18 17 5 27 21 8 5 10 28 22 13 22 8 28 9 1 25 10 14 24 27 29
Test Data : 9 1 1 14 19 16 7 4 12 1 21 11 16 23 18 20 15 30 7 27
Test Data : 2 27 5 9 29 6 19 20 24 25
Test Data : 3 30 24 25 27 3 14 24 6 25 1 14 10
Test Data : 20 5 20 12 22 2 9 22 14 6 17
Test Data : 13 12 8 15 5 13 9 16 24 29 9 20 22 16 22 5 18 1 28 5
Test Data : 12 23 16 7 22 11 18 18 26 22 5 26 28 15 7 23 8 19 10 4 19 6 7 17 28 26 30 21 27 2

測試通過!

get_gt10(data) => 12,23,16,22,11,18,18,26,22,26,28,15,23,19,19,17,28,26,30,21,27
get_has3(data) => 23,23,30
get_prime(data) => 23,7,11,5,7,23,19,19,7,17,2
```

