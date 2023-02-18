import { useState } from "react";
import { Cell, Dialog, Popup } from "@nutui/nutui-react-taro";
import "./index.scss";

const App = () => {
    const [showMutiple, setShowMutiple] = useState(false)
    const [showMutipleInner, setShowMutipleInner] = useState(false)
    const arr = new Array(100).fill('')
    const [visible1, setVisible1] = useState(false);

    return (
        <>
            <Cell title="基础弹框" onClick={() => setVisible1(true)} />
            <Dialog
                title="组件调用"
                visible={visible1}
                onOk={() => setVisible1(false)}
                onCancel={() => setVisible1(false)}
            >
                如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。
            </Dialog>
            <Cell title="多层堆叠" isLink onClick={() => { setShowMutiple(true) }} />
            {arr.map((a, i) => <Cell title={`我是其他内容${i + 1}`} />)}
            <Popup
                visible={showMutiple}
                style={{ padding: '30px 50px' }}
                onClose={() => {
                    setShowMutiple(false)
                }}
            >
                <span onClick={() => { setShowMutipleInner(true) }}>Click It</span>
            </Popup>
            <Popup
                visible={showMutipleInner}
                style={{ padding: '30px 50px' }}
                onClose={() => {
                    setShowMutipleInner(false)
                }}
            >
                <span onClick={() => { setShowMutipleInner(false) }}>close</span>
            </Popup>
        </>
    );
};
export default App;