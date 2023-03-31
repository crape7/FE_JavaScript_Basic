/* 3번 문제 답안을 작성해주세요. */
function solution(n) {
    let x=1; let count=1;
    while(x<=n){
        x=x*(count+1); 
        count++;
    }
    return count-1;
}