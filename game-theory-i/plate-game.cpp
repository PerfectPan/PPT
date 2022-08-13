#include <cstdio>
#define MP make_pair
#define PB emplace_back
using namespace std;
typedef long long ll;
template<typename T>
inline T read(T&x){
    x=0;int f=0;char ch=getchar();
    while (ch<'0'||ch>'9') f|=(ch=='-'),ch=getchar();
    while (ch>='0'&&ch<='9') x=x*10+ch-'0',ch=getchar();
    return x=f?-x:x;
}
int a, b, r;
int main() {
    read(a), read(b), read(r);
    if (2 * r > a || 2 * r > b) {
        puts("Second");
    } else {
        puts("First");
    }
    return 0;
}
