import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from "@mui/material";
import { useState } from "react";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export const MuiCheckBox = () => {
    const [acceptInc, setAcceptInc] = useState(false)

    

    //console.log({ acceptInc })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptInc(event.target.checked)
    }

    const [skills, setSkills] = useState<string[]>([])

    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        const index = skills.indexOf(event.target.value)

        if(index === -1 ){
            setSkills([...skills, event.target.value])
        }else{
            setSkills(skills.filter((skill)=> skill !== event.target.value))
        }
    }


    console.log({skills})

    return (

        <Box>
            <Box>
                <FormControlLabel


                    label='I accept terms and conditions'
                    control={<Checkbox checked={acceptInc} onChange={handleChange} />}

                />





            </Box>

            <Box>

                <Checkbox

                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}

                    checked={acceptInc}
                    onChange={handleChange}

                />


            </Box>

            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>

                    <FormGroup>
                        <FormControlLabel
                            label='HTML'
                            value='html'
                            control={<Checkbox checked={skills.includes('html')} onChange={handleSkillChange} />}
                        />

                        <FormControlLabel
                            label='CSS'
                            value='css'
                            control={<Checkbox checked={skills.includes('css')} onChange={handleSkillChange} />}
                        />

                        <FormControlLabel
                            label='JavaScript'
                            value='javascript'
                            control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillChange} />}
                        />



                    </FormGroup>

                </FormControl>



            </Box>

        </Box>




    )
}