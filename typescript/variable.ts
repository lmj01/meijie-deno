
let operatorExpand = true;

if (operatorExpand) {
    // https://www.tslang.cn/docs/handbook/variable-declarations.html
    
    // 展开操作符，与解构相反，它允许将一个数组展开为另一个数组，
    // 或一个对象展开为另一个对象
    let first = [1, 2];
    let second = [3, 4];
    // 展开操作对first和second进行了浅拷贝，不改变原理的值
    let bothPlus = [0, ...first, ...second, 5];

    console.log(first, second, bothPlus);

    let defaults = { food:'spicy', price:'$$', ambiance:'noisy'};
    let search = { ...defaults, food: 'rich'};
    // 展开是从左至右进行处理，结果仍为对象，后面对象出现的属性会覆盖前面的
    // ，如果调整顺序，那么便宜不通过了！typescript 3.9.2
    // let search2 = { food: 'rich', ...defaults};
    console.log(search);

    class C {
        p = 12;
        m() {

        }
    }
    let c = new C();
    let clone = { ...c};
    console.log(clone.p);
    // 对象展开时，它仅包含对象自身的可枚举属性，即对象的方法会丢失
    // clone.m();
    // console.log(clone.m());
}