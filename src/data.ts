import { Data } from "./types";

function initialStorage() {
  !localStorage.getItem("data") &&
    localStorage.setItem(
      "data",
      `{
      "backlog": [],
      "ready": [],
      "progress": [],
      "finished": []
      }`
    );
}

function getData(): Data {
  const data: string | null = localStorage.getItem("data");
  const result: Data = data ? JSON.parse(data) : {};
  return result;
}

function setData(data: Data) {
  const jsonData = JSON.stringify(data);
  localStorage.setItem("data", jsonData);
}

function dataCounter(): number {
  let counter: number = 0;
  const curData: any = getData();

  for (let key in curData) {
    if (key !== "finished") {
      counter += +curData[key].length;
    }
  }
  return counter;
}

function finishedCounter(): number {
  let counter: number = 0;
  const curData: Data = getData();
  counter += +curData["finished"].length;
  return counter;
}

function createId(): number {
  let id: number = 0;
  const curData: Data = getData();

  for (let key in curData) {
    id += +curData[key].length;
  }
  return id;
}

export {
  initialStorage,
  getData,
  setData,
  dataCounter,
  finishedCounter,
  createId,
};
