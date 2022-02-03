const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function (e) {
  console.log(e)
}

inputText.onkeydown = logValue
inputDate.onkeydown = logValue

//「aキー」をクリックして「あ」をinputフォームに入力したとする。
//onclickにしたら→e.target.valueには「a」が入る
//onkeydownにしたら→e.target.valueには「あ」が入って、e.keyには「a」が入る
//このようにこのlogValueという変数のfunction(e)のeにはonclickとかonkeydownというイベントハンドラによって
//eの中身は変わってくる。
//このeはイベントオブジェクトと言われ、さまざまな情報が入っている。
//このeの値を確認したかったら「console.log(e)」として出力してやれば良い
//→例えばonkeydownで入力フォームに「uキー」を押して「う」と入力した場合…
//KeyboardEvent {isTrusted: true, key: "u", code: "KeyU", location: 0, ctrlKey: false, …}
//altKey: false
//bubbles: true
//cancelBubble: false
//cancelable: true
//charCode: 0
//...
//key: "u"　　　←ポイント
//keyCode: 229
//...
//targetの中身を見てやると…
//target: input#input-text
//accept: ""
//accessKey: ""
//align: ""
//alt: ""
//ariaAtomic: null
//ariaAutoComplete: null
//...
//type: "text"
//useMap: ""
//validationMessage: ""
//validity: ValidityState {valueMissing: false, typeMismatch: false, patternMismatch: false, tooLong: false, tooShort: false, …}
//value: "う"　　　←ポイント
//valueAsDate: null
//valueAsNumber: NaN
//webkitEntries: []

//となっている。なのでe.target.valueは「う」であり、e.keyは「u」であることがわかる。
