/* 2번 문제 답안을 작성해주세요. */
function solution(num_list) {
    let odd = 0;
    for(let i = 0; i<num_list.length; i++) {
        if (num_list[i]%2===1) {
            odd++;
        }
    }
    let answer = [num_list.length-odd,odd];
    return answer;
}