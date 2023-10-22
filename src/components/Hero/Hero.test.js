import { render, screen, fireEvent } from "@testing-library/react";
import Hero from "./Hero";


    test("renders the Hero component", () => {
        render(<Hero />);

        const mainTitleHero = screen.getByText(/¡Conoce la fibra óptica de Movistar!/i);
        const descriptionHero = screen.getByText(/Si ya eres cliente Movistar,/i);
        const descriptionHeroSpan = screen.getByText(/migra SIN COSTO/i);
        const descriptionHeroFinal = screen.getByText(/manteniendo tu plan actual./i);
        const imagenElementHero = screen.getByAltText(/Hero/i);
        const imagenElementPromo = screen.getByAltText(/Promo/i);


        expect(mainTitleHero).toBeInTheDocument();
        expect(descriptionHero).toBeInTheDocument();
        expect(descriptionHeroSpan).toBeInTheDocument();
        expect(descriptionHeroFinal).toBeInTheDocument();
        expect(imagenElementHero).toBeInTheDocument();
        expect(imagenElementPromo).toBeInTheDocument();
    })