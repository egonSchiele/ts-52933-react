import "./jupyterlab-codemirror";
import { CodeMirrorEditor } from "@jupyterlab/codemirror";

const newEditor = new CodeMirrorEditor({
  config: {
    myExtraOption: true,
  },
  host: {} as any,
  model: {} as any,
});
