import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Dictionary  from '../../../Core/Dictionary'
import { useState } from 'react';
import './index.css'

interface ChangeStoryModalProps {
    modalIsOpen: boolean,
    handleClose: any,
    changeStoryFunction: Function
}

const ChangeStoryModal = (props: ChangeStoryModalProps) => {

    const [storyName, setStoryName] = useState<string>('')
    
    const clearStoryName = () => {
        setStoryName('')
    }

    const onCloseModal = () => {
        clearStoryName()
        props.handleClose()
    }

    const changeStoryName = () => { 
        let storyNameText = ''
        if(storyName.length) {
            storyNameText = storyName
        }
        props.changeStoryFunction(storyNameText)
        clearStoryName()
        props.handleClose()
    }

    return (
        <Modal
        open={props.modalIsOpen}
        onClose={onCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
         <Card className='modal-card'>
            <CardContent>
                <Typography id='modal-title' >{Dictionary.story}</Typography>
                <TextField id="modal-input" fullWidth={true} value={storyName} onChange={e => setStoryName(e.target.value.substr(0, 30))} label={Dictionary.newStory} variant="outlined" />
            </CardContent>
            <Button id='modal-button' variant="contained" size="medium" color="primary" onClick={changeStoryName}>
                {Dictionary.change}
            </Button>
         </Card>
        </Modal>
    )
}

export default ChangeStoryModal