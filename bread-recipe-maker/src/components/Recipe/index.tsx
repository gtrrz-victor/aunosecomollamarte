import React, { FunctionComponent } from 'react';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RemoveIcon from '@material-ui/icons/Remove';
import { recipeCalculator } from '../../utils/recipeCalculator';
import { FlourType } from '../../utils/flourTypes';


type Props = {
  finalWeight: number,
  flourType: string,
  isWholemeal: boolean,
  setFinalWeight: React.Dispatch<React.SetStateAction<number>>
}

export const Recipe: FunctionComponent<Props> = ({ finalWeight, flourType, isWholemeal, setFinalWeight }) => {
  let type = FlourType[flourType as keyof typeof FlourType]
  const recipe = recipeCalculator(type, finalWeight, isWholemeal)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let finalWeight = parseInt(event.target.value)
    if (isNaN(finalWeight)) {
      finalWeight = 0;
    }
    setFinalWeight(finalWeight);
  };
  return <aside>
    <h2>How much will your bread weight?</h2>
    <FormControl>
      <Input
        type="number"
        value={finalWeight}
        onChange={handleChange}
        endAdornment={<InputAdornment position="end">Grams</InputAdornment>}
        inputProps={{
          'aria-label': 'weight',
        }}
      />
      <FormHelperText>Weight</FormHelperText>
    </FormControl>
    <Divider />
    <h3>Recipe description</h3>
    <List component="nav" aria-label="secondary mailbox folders">
      <ListItem>
        <ListItemIcon>
          <RemoveIcon />
        </ListItemIcon>
        <ListItemText
          primary={"Flour: " + recipe.flour + " grams"}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <RemoveIcon />
        </ListItemIcon>
        <ListItemText
          primary={"Sourdought: " + recipe.sourdought + " grams"}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <RemoveIcon />
        </ListItemIcon>
        <ListItemText
          primary={"Water: " + recipe.water + " mL"}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <RemoveIcon />
        </ListItemIcon>
        <ListItemText
          primary={"Salt: " + recipe.salt + " grams"}
        />
      </ListItem>
    </List>
  </aside>
}
