import React from "react";
import "./SetGoalForm.css";

export default function AddTripForm({ holdLuggageWeightAllowance, holdLuggageGoal, updateFields }) {
return (
    <>
        <h2>Set Goal</h2>

        <div>
            <p className='text--thick'>
            My carbon footprint for this
            <br /> flight is
            </p>
            <h2>xxxx kg</h2>
            <p className='text--thin'>of CO₂</p>
        </div>

        {holdLuggageWeightAllowance && (
            <div className='slider'>
                <p className='text--thick'>My hold luggage goal</p>
                <h2>{holdLuggageGoal} kg</h2>
                <div className='slider-input_container'>
                    <input
                    type='range'
                    name='holdLuggageGoal'
                    min='0'
                    max={holdLuggageWeightAllowance}
                    step='1'
                    value={holdLuggageGoal}
                    onChange={updateFields}
                    />
                    <div className='luggage-goal-weight_container'>
                    <p className='text--thin'>0kg</p>
                    <p className='text--thin'>{`${holdLuggageWeightAllowance}kg`}</p>
                    </div>
                </div>
            </div>
        )}
    </>
);
}