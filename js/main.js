'use strict';
{
  // １から３６の配列を作る
  const children = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
  
  // １の配列をランダムに並び替える
  for (let i = children.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [children[j], children[i]] = [children[i], children[j]];
  };
    
  // 配列を６個の配列に分割する
  const child = [];
  const childCount = children.length / 6;
  for (let i = 0; i < childCount; i++) {
    child.push(children.splice(0, 6));
  }
  
  // テーブル内の要素として追加する
  for (let row = 0; row < 6; row++) {
    const tr = document.createElement('tr');
    for (let col = 0; col < 6; col++) {
      const td = document.createElement('td');
      td.textContent = child[row][col];
      tr.appendChild(td);
    }
    document.querySelector('tbody').appendChild(tr);
  }
}
  
