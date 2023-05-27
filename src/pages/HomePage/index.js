import React from "react";
import BasePage from "../../components/BasePage";
import TitleBody from "../../components/TitleBody";

const HomePage = () => {
    return(
        <BasePage>
            <TitleBody
                title="Conversor"
                buttonValue={[
                    {
                        type: "button",
                        variant: "primary",
                        size: "sm",
                        value: "Voltar"
                    },
                ]}
            />
        </BasePage>
    )
}

export default HomePage;