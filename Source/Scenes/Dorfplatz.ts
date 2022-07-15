namespace VisualNovel {
    export async function Dorfplatz(): ƒS.SceneReturn {
        console.log("Dorfplatz");

        let signalDelay1: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);
        ƒS.Speech.hide();

        // background 
        await ƒS.Location.show(locations.dorfplatz);

        // transition
        await ƒS.update(transitions.vignette.duration, transitions.vignette.alpha, transitions.vignette.edge);

        // character
        await ƒS.Character.show(characters.hauptmann, characters.hauptmann.pose.neutral, ƒS.positionPercent(70, 100));
        ƒS.update();

        // dialog
        await ƒS.Speech.tell(characters.hauptmann, "Ah da bist du ja!");


        await signalDelay1();
    }
}