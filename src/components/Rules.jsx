import styled from "styled-components";


const Rules = () => {
    return (
        <RulesContainer >
            <h2>How to play Dice Game</h2>
            <div className="text">
                <p>Click on dice image</p>
                <p>
                    After click on dice if selected number is equal to dice number you will get same point as dice  {" "}

                </p>
                <p>If you get wrong guess then 2 points will be deducted</p>


            </div>
        </RulesContainer>
    )
}

export default Rules


const RulesContainer = styled.div`
    background-color: #ceb0b0;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 40px;
    border-radius: 15px;
    h2{
        font-size: 24px;

    }
    .text{
        margin-top: 24px;
    }

`;