import React,{ FunctionComponent } from 'react';
import Button from '@material-ui/core/Button';
import { FlourSelection } from '../FlourSelection';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Recipe } from '../Recipe';
import { StepByStep } from '../StepByStep';
import Fab from '@material-ui/core/Fab';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        extendedIcon: {
            marginRight: theme.spacing(1),
        },
        fab: {
            position: 'absolute',
            top: theme.spacing(1),
            margin: theme.spacing(1),
            right: theme.spacing(2),
            backgroundColor: '#ff5722'
        }
    }),
);

enum Views {
    FlourSelection,
    Recipe,
    StepByStep,
}

interface View {
    buttonText: string,
    id: Views,
    nextView?: View,
}

const stepByStep = {
    buttonText: 'Enjoy your fantastic bread!',
    id: Views.StepByStep
}
const recipeView = {
    buttonText: 'Go to recipe instructions',
    id: Views.Recipe,
    nextView: stepByStep,
}
const flourSelectionView = {
    buttonText: 'Next Step',
    id: Views.FlourSelection,
    nextView: recipeView,
}


export const BreadRecipeMaker: FunctionComponent = () => {
    const classes = useStyles();
    const [currentView, nextView] = React.useState<View>(flourSelectionView);
    const [finalWeight, setFinalWeight] = React.useState<number>(0);
    const [flourType, setFlourType] = React.useState<string>("");
    const [isWholemeal, setWholemeal] = React.useState(false);
    const handleFlourTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = (event.target as HTMLInputElement).value
        setFlourType(value)
    };
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWholemeal(event.target.checked)
    };
    const goToNextView = () => {
        if (currentView.nextView !== undefined) {
            nextView(currentView.nextView)
        }
    };
    const reset = () => {
        nextView(flourSelectionView)
        setFinalWeight(0)
        setFlourType("")
        setWholemeal(false)
    }

    const activeComponent = (currentView: View) => {
        switch (currentView.id) {
            case Views.FlourSelection:
                return <FlourSelection
                    flourType={flourType}
                    isWholemeal={isWholemeal}
                    handleFlourTypeChange={handleFlourTypeChange}
                    handleCheckboxChange={handleCheckboxChange}
                />
            case Views.Recipe:
                return <Recipe
                    finalWeight={finalWeight}
                    setFinalWeight={setFinalWeight}
                    isWholemeal={isWholemeal}
                    flourType={flourType}
                />
            case Views.StepByStep:
                return <StepByStep
                    finalWeight={finalWeight}
                    isWholemeal={isWholemeal}
                    flourType={flourType} />
        }
    }

    return <aside>
        <Fab
            variant="extended"
            size="small"
            aria-label="add"
            className={classes.fab}
            onClick={() => reset()}
        >
            <ClearIcon className={classes.extendedIcon} />
            Reset
        </Fab>
        {activeComponent(currentView)}
        <Button variant="outlined" fullWidth color="secondary" onClick={() => goToNextView()} disabled={currentView.nextView === undefined || flourType === ""}>
            {currentView.buttonText}
        </Button>
    </aside>
}

