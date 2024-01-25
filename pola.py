n:int = int(input("Masukkan nilai: "))
k:int = int(input("Masukkan nilai: "))
for i in range(1,n+1):
    if i%k == 0:
        print("*",end=" ")
        continue
    print(i,end=" ")