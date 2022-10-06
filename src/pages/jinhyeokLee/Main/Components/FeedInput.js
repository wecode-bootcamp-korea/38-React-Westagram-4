import React from 'react';

const FeedInput = ({ value, setValue, comments, setComments }) => {
  //댓글 저장 함수
  const saveComments = () => {
    //랜덤 아이디 생성
    let randomId = Math.random();

    //배열에 넣어줄 객체
    let commentValue = {
      id: randomId,
      value: value,
    };

    //복사본을 만들고 객체 저장 후 다시 원본 배열값 변경
    const copySaveComments = [...comments];
    copySaveComments.push(commentValue);
    setComments(copySaveComments);

    //인풋값 비우기
    setValue('');
  };

  //엔터키로 함수 실행
  const onKeyDownHandler = e => {
    if (e.key === 'Enter') {
      saveComments();
    }
  };

  return (
    <div className="feedInputBox">
      <input
        id="commentInput"
        type="text"
        placeholder="댓글 달기..."
        value={value}
        onKeyDown={onKeyDownHandler}
        onChange={e => {
          setValue(e.target.value);
        }}
      />
      <button id="saveValue" onClick={saveComments}>
        게시
      </button>
    </div>
  );
};

export default FeedInput;
