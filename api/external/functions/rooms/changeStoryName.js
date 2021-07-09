import ChangeStoryNameUseCase from '../../../useCases/changeStoryNameUseCase.js'

const changeStoryName = {
    run: (data) => {
        try {
            const RefreshedRoom = ChangeStoryNameUseCase.run(data)
            changeStoryName.log(data)
            return RefreshedRoom
        } catch (error) {
            console.log(`Error :: changeStoryName :: run ::`, error)
        }
    }, 

    log: (data) => {
        console.log(`----------------------------------------------------------------`)
        console.log(`-- Story name has been changed to [${data.storyName}] :: ${new Date().toUTCString()}`)
        console.log(`-- Room: ${data.room}`)
        console.log(`-- User: ${data.client.name}`)
    }
}

export default changeStoryName