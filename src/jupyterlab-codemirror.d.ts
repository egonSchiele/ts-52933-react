import "@jupterlab/codemirror";

declare module "@jupyterlab/codemirror" {
  declare namespace CodeMirrorEditor {
    interface IConfig {
      myExtraOption: boolean;
    }
  }
}
