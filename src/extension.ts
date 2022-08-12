// vscodeのモジュールを読み込みます。
import * as vscode from 'vscode';

// 拡張機能が有効になった時、以下が実行されます。
export function activate(context: vscode.ExtensionContext) {
    // 以下のメソッドがvscodeからコマンド等で実行されます。
    var disposable = vscode.commands.registerCommand('markdowntestmaker.MadeByAsterisk', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const text = document.getText(selection);
            if (text) {
                const textFormatted = MadeByAsterisk(text);
                if (textFormatted) {
                    editor.edit(editBuilder => {
                        editBuilder.replace(selection, textFormatted);
                    });
                } else {
                    vscode.window.showInformationMessage("text not formatted.");
                    console.log("text not formatted.");
                }
            } else {
                vscode.window.showInformationMessage("text not detected.");
                console.log("text not detected.");
            }
        }
    });
    disposable = vscode.commands.registerCommand('markdowntestmaker.MadeByBox', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const text = document.getText(selection);
            if (text) {
                const textFormatted = MadeByBox(text);
                if (textFormatted) {
                    editor.edit(editBuilder => {
                        editBuilder.replace(selection, textFormatted);
                    });
                } else {
                    vscode.window.showInformationMessage("text not formatted.");
                    console.log("text not formatted.");
                }
            } else {
                vscode.window.showInformationMessage("text not detected.");
                console.log("text not detected.");
            }
        }
    });
    disposable = vscode.commands.registerCommand('markdowntestmaker.MadeByFill_in_the_blank', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const text = document.getText(selection);
            if (text) {
                const [textFormatted,last_text] = MadeByHTML(text);
                let totalLines = 0;
                totalLines = (document.getText().match(/\n/g) || '').length;
                let originalPosition = selection.start.translate(totalLines, 0)
                if (textFormatted) {
                    editor.edit(editBuilder => {editBuilder.replace(selection, textFormatted),editBuilder.insert(originalPosition ,last_text)});
                } else {
                    vscode.window.showInformationMessage("text not formatted.");
                    console.log("text not formatted.");
                }
            } else {
                vscode.window.showInformationMessage("text not detected.");
                console.log("text not detected.");
            }
        }
    });
    disposable = vscode.commands.registerCommand('markdowntestmaker.MadeByBox_and_Answer', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const text = document.getText(selection);
            if (text) {
                const [textFormatted, last_text] = MadeByBox_and_Answer(text);
                let totalLines = 0;
                totalLines = (document.getText().match(/\n/g) || '').length;
                let originalPosition = selection.start.translate(totalLines, 0);
                if (textFormatted) {
                    editor.edit(editBuilder => { editBuilder.replace(selection, textFormatted), editBuilder.insert(originalPosition, last_text); });
                }
                else {
                    vscode.window.showInformationMessage("text not formatted.");
                    console.log("text not formatted.");
                }
            }
            else {
                vscode.window.showInformationMessage("text not detected.");
                console.log("text not detected.");
            }
        }
    });
    disposable = vscode.commands.registerCommand('markdowntestmaker.delate_quention', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const text = document.getText(selection);
            const Dintext1 = '<input';
            const Dintext2 = '>';
            const Douttext = '';
            if (text) {
                editor.edit(editBuilder => {editBuilder.delete(selection)});
            } else {
                vscode.window.showInformationMessage("text not detected.");
                console.log("text not detected.");
            }
        }
    });
  // 拡張機能が使用されなくなったときに、リソース開放を行うための、設定。
  context.subscriptions.push(disposable);
}

// 選択範囲を[***](# "選択した文字")に変換する処理
function MadeByAsterisk(text: string): string {
    let ast = '';
    let output = '';
    for (let i=0; i <text.length;i++){
        ast = ast + '*';
    }
    output = '[' + ast + '](# "' + text +'")';
    return output;
}

// 選択範囲を[<input type="text"/>](# "選択した文字")に変換する処理
function MadeByBox(text: string): string {
    let boxtag = '<input type="text"/>';
    let output = '';
    output = boxtag + '[[Ans.]](# "' + text +'")';
    return output;
}

function MadeByHTML(text: string): [string,string] {
    let inputbox = '';
    let checker = '';
    // let ransu = Math.random().toString(32).substring(2).slice(-8);
    let func_id = createRandomString();
    let inbox_id = createRandomString();
    let in1 = '<input type="text" id="'
    let in2 = '"><input type="button" value="check" onclick="'
    let in3 = '('
    let in4 = '.value)">[^'
    let in5 = ']'

    let ch1 = '\n[^'
    let ch2 = ']: <div id="'
    let ch3 = '"></div><script>function '
    let ch4 = '(intx){var A="'
    let ch5 = '",R;if(intx==A){R="Great!";}else{R="no...answer is "+A+"";}document.getElementById("'
    let ch6 = '").style.color = "red";document.getElementById("'
    let ch7 = '").innerHTML = R;}</script>'
    inputbox = in1 + inbox_id + in2 + func_id +in3 + inbox_id + in4 + func_id + in5;
    checker = ch1 + func_id + ch2 + text + ch3 + func_id + ch4 + text + ch5 + text + ch6 + text + ch7;
    return [inputbox,checker];
}

function MadeByBox_and_Answer(text: string): [string,string] {
    let inputbox = '';
    let checker = '';
    // let ransu = Math.random().toString(32).substring(2).slice(-8);
    let func_id = createRandomString();
    let inbox_id = createRandomString();
    let in1 = '<input type="text" id="';
    let in2 = '">[^';
    let in3 = ']';
    let ch1 = '\n[^';
    let ch2 = ']:';
    inputbox = in1 + inbox_id + in2 + func_id + in3;
    checker = ch1 + func_id + ch2 + text;
    return [inputbox, checker];
}

function createRandomString() {
    const UseChar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const L = 5;
    let rnd = '';
    for (var i = 0; i < L; i++) {
      rnd += UseChar.charAt(Math.floor(Math.random() * UseChar.length));
    }
    return rnd;
  }

// 拡張機能が無効になった時呼び出されます。
export function deactivate() {}

