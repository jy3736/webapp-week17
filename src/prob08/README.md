# 動態網頁設計 (2022 Spring) 期末測驗

### [問題 8]：設計一函數回傳陣列中 N 個隨機數字的『中間值』。

- 請依照題目說明，在『指定段落』完成欠缺的程式碼。
- 設計 `midVal(arr)` 函數回傳 `arr` 的『中間值』，請參考簡易測試。
- 測試用陣列 `arr` 不會有重複數字且含有奇數個元素。
    - 換言之，『中間值』在陣列中比他大及比他小的數值一樣多。
- 解題建議：
    - 參數 `arr` 是一個陣列，你可藉由 `arr.length` 取得陣列長度。
    - 記得 ~ 使用 `Number(...)` 將陣列中的資料轉成數字型態。

### 簡易測試
```Powershell
prob08> 1..11 | node .\main.js
6

prob08> 1,6,4,5,3,2,7 | node .\main.js
4

prob08> 33,22,44,66,77,88,99,11,55 | Get-Random -Count 21  | node .\main.js
55
```

### 自動批閱測試
```Powershell
prob08> .\test.ps1

********************************************
*         Dynamic Web Programming          *
*  Exercises / Homework Automatic Grading  *
********************************************

Test Data : 57 99 88 60 9 45 54 23 25 48 90 61 22
Test Data : 42 28 34 22 37 39 99 11 35
Test Data : 13 35 55 25 3 6 90 89 91 54 48 74 80
Test Data : 60 21 89 23 48 3 94 57 17 30 55 56 10 72 82 4 34
Test Data : 83 56 41 54 36 35 3 63 33 97 60 1 84
Test Data : 32 70 55 81 67 44 84 24 34 13 99 93 79 48 11 53 74 22 42 16 27 78 83 2 6 15 68
Test Data : 47 1 8 27 13 51 40 23 96 97 82 92 38 39 73 34 43 76 65
Test Data : 13 11 80 22 1 10 71 3 78 94 26 76 28 69 24 18 46 79 58
Test Data : 28 38 48 74 17 29 12
Test Data : 77 89 16 90 12 0 79 54 53 29 82 9 42

測試通過!

53
```
