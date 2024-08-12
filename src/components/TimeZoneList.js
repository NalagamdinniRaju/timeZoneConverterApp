import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TimeZoneItem from './TimeZoneItem';

function TimeZoneList({ timeZones, currentTime, onRemoveTimeZone, onDragEnd }) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="timezone-list">
            {timeZones.map((zone, index) => (
              <Draggable key={zone} draggableId={zone} index={index}>
                {(provided) => (
                  <TimeZoneItem
                    zone={zone}
                    currentTime={currentTime}
                    onRemove={() => onRemoveTimeZone(index)}
                    provided={provided}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default TimeZoneList;