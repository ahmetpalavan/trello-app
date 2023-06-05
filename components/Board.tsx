"use client";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Board = () => {
  return (
    <DragDropContext onDragEnd={() => {}}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => <div className="flex flex-1" {...provided.droppableProps} ref={provided.innerRef} />}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
