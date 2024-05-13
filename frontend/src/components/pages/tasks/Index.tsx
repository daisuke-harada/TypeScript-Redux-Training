import { memo, FC } from 'react';
import tw from 'twin.macro'

export const Index: FC = memo(() => {
  const MainDiv = tw.div`flex justify-center`

  const SubDiv2 = tw.div`bg-blue-200 mx-auto w-2/3 h-[50px] mt-[50px] text-center pt-5`

  return(
   <MainDiv>
    <SubDiv2>
      ありがとう
    </SubDiv2>
  </MainDiv>
  )
})