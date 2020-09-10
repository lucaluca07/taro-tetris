import React from "react";
import { View, Button } from "@tarojs/components";
import './index.less'

const Keyboard: React.FC = ({}) => {
  return (
    <View className='keyboard'>
      <View className='move'>
        <Button className='rotate btn'>
        </Button>
        <Button className='right btn'></Button>
        <Button className='down btn'></Button>
        <Button className='left btn'></Button>
      </View>
      <View className='right-block'>
        <View className='function'>
          <Button className='pause btn'>暂停</Button>
          <Button className='voice btn'>声音</Button>
          <Button className='reset btn'>重玩</Button>
        </View>
        <Button className='bottom btn'>掉落</Button>
      </View>
    </View>
  );
};

export default Keyboard;
