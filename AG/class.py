str = "Avinash"
str2 = str
for i in str:
    if i in "aeiouAEIOU":
        str2.replace(i,"")
print(str2)