n = []
nn = []
nnn = []
for i in range(0, 3):
    ele = int(input('number: '))
    n.append(ele)

for i in range(0, len(n)):
    for j in range(i-1, len(n)):
        print(n[i])
        print(n[j])
        print('check')
        if n[i] < n[j]:
            print('found one')
            nn.append(n[i])
            break
        elif n[i] > n[j]:
            print('found one')
            nnn.append(n[i])
            break
print(nn)
print(nnn)
