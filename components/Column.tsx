import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

interface ColumnProps {
  id: TypedColumn;
  todos: Todo[];
  index: number;
}

const idToColumnText: Record<TypedColumn, string> = {
  done: "Done",
  inprogress: "In Progress",
  todo: "To Do",
};

const Column = ({ id, todos, index }: ColumnProps) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div className="bg-gray-300 rounded-lg p-5" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Droppable droppableId={index.toString()} type="card">
            {(provided, e) => (
              <div
                className={`p-2 rounded-2xl shadow-sm ${e.isDraggingOver ? "bg-green-200" : "bg-white/50"}`}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h2 className="text-xl flex justify-betweenp p-2 font-bold text-gray-700">
                  {idToColumnText[id]}
                  <span className="text-sm font-normal text-gray-400 bg-gray-200 px-2 py-2 rounded-full ml-2">{todos.length}</span>
                </h2>
                <div className="space-y-2">
                  {todos.map((todo, index) => (
                    <Draggable draggableId={todo.id} index={index} key={todo.id}>
                      {(provided) => (
                        <div
                          className="bg-white rounded-md shadow-sm p-2"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {todo.title}
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
