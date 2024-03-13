import React from "react";

function JavaScript() {
  // Задача 1
  const array = [1, 2, 1, 2, 1, 11, 6, 6, 7, 1, "b", "a", "b", 0];
  const filterArr = array.filter((value, idx) => array.indexOf(value) === idx);

  // Задача 2
  const full = { full1: true, full2: false, full3: true };

  function getTrueKey() {
    const result = [];
    for (const key in full) {
      if (full.hasOwnProperty(key) && full[key] === true) {
        result.push(key);
      }
    }
    return result.join(", ");
  }

  // Задача 3
  const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const n = 3;

  function solutionOne(arr, n) {
    const result = [];
    for (let item = 0; item < arr.length; item += n) {
      result.push(arr.slice(item, item + n));
    }
    return result;
  }

  function solutionTwo(arr, n) {
    const result = [];
    for (let item = 0; item < Math.ceil(arr.length / n); item++) {
      result[item] = arr.slice((item * n), (item * n) + n);
    }

    return result;
  }

  // console.log(solutionOne(newArray, n));
  // console.log(solutionTwo(newArray, n));

  return (
    <div className="js__task">
      <h1 className="text-4xl text-blue-50">Задачи по JS</h1>
      <h2 className="text-xl">
        Task 1: [
        {filterArr.join(",")}
        ]
      </h2>
      <h2 className="text-2xl">
        Task 2:
        {getTrueKey()}
      </h2>
      <h2 className="text-2xl">
        Task 3.1:
        {JSON.stringify(solutionOne(newArray, n))}
      </h2>
      <h2 className="text-2xl">
        Task 3.2:
        {JSON.stringify(solutionTwo(newArray, n))}
      </h2>
    </div>
  );
}

export default JavaScript;
