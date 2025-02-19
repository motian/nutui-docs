export function loadImageEnd(list: string[], callback: any, basePath?: string) {
  if (!list || list.length === 0) return;

  if (basePath) list = list.map((item) => basePath + item);
  let img: any = new Image();
  img.data = {
    list: list,
    callback: callback,
    resultList: [],
    num: 0
  };
  img.addEventListener('load', loadImgHandler);
  img.addEventListener('error', loadImgHandler);
  img.src = list[img.data.num];
}

function loadImgHandler(e: any) {
  let data = e.currentTarget.data;
  if (e.type !== 'error') {
    data.resultList.push(e.currentTarget.cloneNode(false));
  }
  data.num++;
  if (data.num > data.list.length - 1) {
    e.currentTarget.removeEventListener('load', loadImgHandler);
    if (data.callback) {
      data.callback(data.resultList);
    }
    data = null;
    return;
  }
  e.currentTarget.src = data.list[data.num];
}
