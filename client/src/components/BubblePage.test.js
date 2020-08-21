import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { userEvent } from '@testing-library/user-event'
import { getColorsData as mockFetchBubbles} from '../api/getColorsData'
import BubblePage from "./BubblePage";



jest.mock('../api/getColorsData')
console.log(mockFetchBubbles)



const bubblesData = {
  data: [
    {
      color: 'aliceblue',
      code: {
        hex: '#f0f8ff'
      },
      id: 1
    },
    {
      color: 'limegreen',
      code: {
        hex: '#99ddbc'
      },
      id: 2
    },
    {
      color: 'aqua',
      code: {
        hex: '#00ffff'
      },
      id: 3
    }
  ]
}

test("Fetches data and renders the bubbles", async () => {

mockFetchBubbles.mockResolvedValueOnce(bubblesData)

const { getByText} = render(<BubblePage />)

await waitFor(() => {
  expect(getByText(/aliceblue/i)).toBeInTheDocument()
  
})

screen.debug()
expect(mockFetchBubbles).toHaveBeenCalledTimes(1)



  



  // render(<ColorList colors={[]}/>)
  
  // await waitFor(() => {
  //   findByText(/aliceblue/i)
  // })

  // userEvent.click()

  // await expect(mockFetchBubbles).toHaveLength(3)

});
