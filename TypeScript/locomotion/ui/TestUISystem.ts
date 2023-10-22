import * as UE from 'ue';
import { D, F } from 'yummyecs';
import { UMG_NAME } from './Define';

export class TestUISystem extends F.System {
    @D.ui(UMG_NAME, 'btnTest', 'OnClicked')
    public testCallback(widget: UE.UserWidget) {
        console.error(widget.GetName());
        console.error('testCallback');
    }
}
