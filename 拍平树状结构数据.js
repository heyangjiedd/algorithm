let arr = [1, [432, [324]], 2, 3, 5, [4, 4, 5, [5, 65, 23,[13,32,52]]]]
let arrChildren = [{
    id: 1,
    children: [{
        id: 2,
        children: [{
            id: 3
        }, {
            id: 3.5
        }]
    }]
},
    {
        id: 4,
        children: [{
            id: 5
        }, {
            id: 7
        }]
    },
    {
        id: 6
    },
    {
        id: 8,
        children: [{
            id: 9
        }]
    }
]

function TreeData(data) {
    return data.reduce((total, item) => {
        return total.concat(Array.isArray(item) ? TreeData(item) : item)
    }, [])
}

function TreeData1(data) {
    return data.reduce((total, item) => {
        return total.concat(Array.isArray(item.children) ? (TreeData1(item.children).concat({
            ...item,
            children: undefined
        })) : item)
    }, [])
}

function* yyy(data) {
    if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            if (Array.isArray(data[i].children)) {
                yield* yyy(data[i].children)
                delete data[i].children
                yield data[i]
            } else {
                yield data[i]
            }
        }
    } else {
        yield data
    }
}

// console.log([...yyy(arrChildren)])
// console.log(TreeData(arr))
function flatten(arr) {
    while (arr.some(item=>Array.isArray(item))){
        arr = [].concat(...arr)
    }
    return arr
}
console.log(flatten(arr))
var ar = [
  { id: 1, pid: null },
  { id: 5, pid: 4 },
  { id: 2, pid: 1 },
  { id: 3, pid: 2 },
  { id: 6, pid: 4 },
  { id: 4, pid: 2 },
  { id: 23, pid: 11 },
  { id: 11, pid: null },
  { id: 7, pid: 4 }
];

function arrToTree(arr) {
  const map = {};
  const root = [];
  arr.forEach(item => {
    if (item.pid === null) {
      //根节点
      map[item.id] = Object.assign(item, map[item.id]);
      root.push(map[item.id]);
    } else {
      // 叶子节点
      if (map[item.pid]) {
        // map中存在上级节点，则添加到上级节点的children中
        map[item.pid].children = map[item.pid].children || [];
        map[item.pid].children.push(item);
      } else {
        // 不存在上级节点，则创造一个上级节点，ps:循环到上级节点时，直接替换。
        map[item.pid] = { id: item.pid, , children: [item] };
      }
      map[item.id] = Object.assign(item, {...map[item.id],pid:item.pid||map[item.id].pid});  // 设置当前id的map，若存在创造的节点，则合并
    }
  });
  return root;
}
console.log(JSON.stringify(arrToTree(ar)));
