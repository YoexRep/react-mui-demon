import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

const skills = ['HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'REACT']


//Con array de objetos

type Skill = {
    id: number
    label: string
}

const skillsOptions = skills.map((skill, index) =>({
    id: index+1,
    label: skill

}) )

export const MuiAutocomplete = () => {

   const [value, setValue] =  useState<string | null>(null)
    console.log({value})

    const [skill, setSkill] =  useState<Skill | null>(null)
    console.log({skill})

    return (<Stack spacing={2} width='250px'>
        <Autocomplete 
        options={skills} 
        renderInput={(params)=> <TextField {...params} label='Skills'  />}

        value={value}
        onChange={(event: any, newValue: string | null )=> setValue(newValue)}
        freeSolo
        
      />
          <Autocomplete 
        options={skillsOptions} 
        renderInput={(params)=> <TextField {...params} label='Skills'  />}

        value={skill}
        onChange={(event: any, newValue: Skill | null )=> setSkill(newValue)}
        
        
      />
        
    </Stack>)
}