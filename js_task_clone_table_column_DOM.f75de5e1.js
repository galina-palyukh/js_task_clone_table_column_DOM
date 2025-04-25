'use strict';
const copyIndex = 2;
const pasteIndex = 4;
document.querySelectorAll(`tr > *:nth-child(${copyIndex})`).forEach((el, i)=>{
    const cloneThHead = el.cloneNode(true);
    const parentNode = el.parentNode;
    parentNode.insertBefore(cloneThHead, parentNode.cells[pasteIndex]);
});

//# sourceMappingURL=js_task_clone_table_column_DOM.f75de5e1.js.map
