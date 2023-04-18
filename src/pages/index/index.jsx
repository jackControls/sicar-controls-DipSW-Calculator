import { View, Input, Button, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'


export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  var decimal

  return (
    <View className='index'>
      <Text>DIP Switch Calculator</Text>
      <Input type='number' maxlength={3} value={decimal} placeholder='Type in the F_Dest_Addr' focus/>
      <Button plain type='primary'>Caculate</Button>
    </View>
  )
}
