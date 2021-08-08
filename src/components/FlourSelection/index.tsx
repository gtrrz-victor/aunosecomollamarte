import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Divider from '@material-ui/core/Divider';
import {FlourType} from '../../utils/flourTypes';

type Props = {
    flourType: string,
    isWholemeal: boolean,
    handleFlourTypeChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void,
    handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
}

// we can use children even though we haven't defined them in our CardProps
export const FlourSelection: FunctionComponent<Props> = ({ flourType, handleCheckboxChange, handleFlourTypeChange, isWholemeal }) => (
    <div>
        <h2>We are going to make your bread recipe</h2>
        <div>
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">All that you have to do is just choose a flour:</FormLabel>
                    {Object.keys(FlourType).map((flourKey) => (
                        <RadioGroup key={flourKey} aria-label="gender" name="gender1" value={flourType} onChange={handleFlourTypeChange}>
                            <FormControlLabel value={flourKey} control={<Radio />} label={FlourType[flourKey as keyof typeof FlourType]} />
                        </RadioGroup>
                    ))}
                </FormControl>
            </div>
            <Divider />
            <div>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={isWholemeal}
                            onChange={handleCheckboxChange}
                        />
                    }
                    label="Is it wholemeal?"
                />
            </div>
        </div>
    </div>
)