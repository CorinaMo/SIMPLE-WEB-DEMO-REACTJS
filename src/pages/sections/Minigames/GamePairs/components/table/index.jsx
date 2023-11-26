/* eslint-disable react-hooks/exhaustive-deps */
import { Card } from "../card";
import { useEffect, useState } from "react";
import { setNewTable } from "../../utils/setNewTable";

export const TableCards = () => {
    const [pair, setPair] = useState([]);
    const [gameNumber, setGameNumber] = useState(1);
    const [hiddenIndex, setHiddenIndex] = useState([]);
    const [flippedIndex, setFlippedIndex] = useState([]);
    const [gameTable, setGameTable] = useState(setNewTable());

    const playCards = (value, id) => {
        let pair_ = pair;
        if (pair.length === 0) {
            pair_.push({ value, id });
            setFlippedIndex([...flippedIndex, id]);
            setPair(pair_);
        }
        else if (pair.length === 1) {
            setFlippedIndex([...flippedIndex, id]);
            pair_.push({ value, id });

            if (pair[0]?.value === value) {
                setTimeout(() => {
                    setHiddenIndex([...hiddenIndex, pair[0].id, id]);
                    setPair([]);
                }, 500);
                
            } else {
                setTimeout(() => {
                    setFlippedIndex([]);
                    setPair([]);
                }, 500);
            }
        }
    };

    const restart = () => {
        setGameTable(setNewTable());
        setHiddenIndex([]);
        setFlippedIndex([]);
    };

    useEffect(() => {
        if (hiddenIndex.length === 12) {
            restart();
            setGameNumber(gameNumber + 1);
        }
    }, [hiddenIndex]);

    return (
        <div key={gameNumber} className="flex flex-row bg-gradient-to-br from-transparent to-[rgba(255,255,255,0.5)] backdrop-blur-sm max-w-full mx-4 sm:w-[70vw] md:w-[50vw] py-6 px-4 flex-wrap justify-center rounded-lg">
            {
                gameTable?.map((card, index) => {
                    return (
                        <div key={`card-${index}`}>
                            <Card id={`${index}`} flippedIndex={flippedIndex} hiddenIndex={hiddenIndex} content={card} setPair={playCards} />
                        </div>
                    )
                })
            }

        </div>
    )
};