$.ajax({
    url: 'https://ipfs.infura.io:5001/api/v0/cat?arg=QmWfY26GE7exeyfVm83Ep6jpcHSqC9utb2Sj3UUUQYT3px',
    beforeSend: function(xhr) {
         xhr.setRequestHeader("Authorization", "1yMVD6UK7R33PIatmGgyVVIqHVB:55f79f348c407b124c4de1e4a0938e7a")
    }, success: function(data){
        alert(data);
        //process the JSON data etc
        console.log(data)
    }
})